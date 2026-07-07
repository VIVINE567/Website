import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const OWNER_FIELD_ORDER = [
    'formType',
    'name',
    'firstName',
    'lastName',
    'email',
    'phone',
    'company',
    'industry',
    'products',
    'message',
    'requirements',
    'submittedAt',
];

const LABELS = {
    formType: 'Form',
    firstName: 'First Name',
    lastName: 'Last Name',
    submittedAt: 'Submitted At',
};

const parseBool = (value, fallback = false) => {
    if (value === undefined || value === null || value === '') return fallback;
    return String(value).toLowerCase() === 'true';
};

const splitEmails = (value) =>
    String(value || '')
        .split(',')
        .map((email) => email.trim())
        .filter(Boolean);

const normalizeEmail = (email) => String(email || '').trim().toLowerCase();

const comparableEmail = (email) => {
    const normalized = normalizeEmail(email);
    const atIndex = normalized.lastIndexOf('@');
    if (atIndex <= 0) return normalized;

    const local = normalized.slice(0, atIndex);
    const domain = normalized.slice(atIndex + 1);
    const withoutTag = local.split('+')[0];
    const comparableDomain = domain === 'googlemail.com' ? 'gmail.com' : domain;
    const comparableLocal = comparableDomain === 'gmail.com'
        ? withoutTag.replace(/\./g, '')
        : withoutTag;

    return `${comparableLocal}@${comparableDomain}`;
};

const uniqueEmails = (emails) => {
    const seen = new Set();

    return emails.filter((email) => {
        const normalized = comparableEmail(email);
        if (!normalized || seen.has(normalized)) return false;
        seen.add(normalized);
        return true;
    });
};

const escapeHtml = (value) =>
    String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

const formatLabel = (key) =>
    LABELS[key] ||
    key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (char) => char.toUpperCase());

const valueToText = (value) => {
    if (Array.isArray(value)) return value.length ? value.join(', ') : '-';
    if (value && typeof value === 'object') return JSON.stringify(value);
    const text = String(value ?? '').trim();
    return text || '-';
};

const valueToHtml = (value) => escapeHtml(valueToText(value));

const getOrderedEntries = (data) => {
    const used = new Set();
    const ordered = OWNER_FIELD_ORDER
        .filter((key) => Object.prototype.hasOwnProperty.call(data, key))
        .map((key) => {
            used.add(key);
            return [key, data[key]];
        });

    const remaining = Object.entries(data).filter(([key]) => !used.has(key));
    return [...ordered, ...remaining];
};

const getSubmitterName = (data) => {
    const fullName = [data.firstName, data.lastName]
        .map((part) => String(part || '').trim())
        .filter(Boolean)
        .join(' ');

    return String(data.name || fullName || data.email || 'Website visitor').trim();
};

const getUserEmail = (data) => String(data.email || '').trim();

const getFormType = (data) =>
    String(data.formType || data.source || 'Website Inquiry').trim();

const normalizeSubmission = (body) => ({
    ...body,
    formType: getFormType(body),
    submittedAt: new Date().toISOString(),
});

const buildOwnerEmail = (data) => {
    const rows = getOrderedEntries(data)
        .map(
            ([key, value]) => `
                <tr>
                    <td style="padding:10px 12px;font-weight:700;border:1px solid #e5dcc8;background:#fbf6ea;color:#2c3a23;">${escapeHtml(formatLabel(key))}</td>
                    <td style="padding:10px 12px;border:1px solid #e5dcc8;color:#4f3f2d;">${valueToHtml(value)}</td>
                </tr>
            `
        )
        .join('');

    return `
        <div style="font-family:Arial,Helvetica,sans-serif;color:#2c3a23;background:#f8f1e4;padding:24px;">
            <div style="max-width:720px;margin:0 auto;background:#fffaf0;border:1px solid #e5dcc8;">
                <div style="background:#2c3a23;color:#fff;padding:20px 24px;border-bottom:4px solid #c9a84c;">
                    <h2 style="margin:0;font-size:22px;">New VIVINE inquiry received</h2>
                    <p style="margin:8px 0 0;color:#f5eee0;">${escapeHtml(getFormType(data))}</p>
                </div>
                <div style="padding:22px 24px;">
                    <p style="margin:0 0 16px;color:#4f3f2d;">A website visitor submitted the form. Complete details are below.</p>
                    <table style="border-collapse:collapse;width:100%;font-size:14px;">
                        ${rows}
                    </table>
                </div>
            </div>
        </div>
    `;
};

const buildUserEmail = (data) => {
    const name = getSubmitterName(data);
    const products = Array.isArray(data.products) && data.products.length
        ? `<p style="margin:14px 0 0;color:#5f4c35;"><strong>Products noted:</strong> ${valueToHtml(data.products)}</p>`
        : '';

    return `
        <div style="font-family:Arial,Helvetica,sans-serif;color:#2c3a23;background:#f8f1e4;padding:24px;">
            <div style="max-width:640px;margin:0 auto;background:#fffaf0;border:1px solid #e5dcc8;">
                <div style="padding:24px 26px;border-top:4px solid #c9a84c;">
                    <h2 style="margin:0 0 12px;font-size:22px;color:#2c3a23;">Thank you for contacting VIVINE</h2>
                    <p style="margin:0 0 14px;color:#5f4c35;">Hi ${escapeHtml(name)},</p>
                    <p style="margin:0;color:#5f4c35;line-height:1.6;">
                        We have received your inquiry. Our team will review your requirements and get back to you within 24 hours.
                    </p>
                    ${products}
                    <p style="margin:22px 0 0;color:#5f4c35;line-height:1.6;">
                        Regards,<br />
                        Team VIVINE
                    </p>
                </div>
            </div>
        </div>
    `;
};

const buildOwnerText = (data) =>
    getOrderedEntries(data)
        .map(([key, value]) => `${formatLabel(key)}: ${valueToText(value)}`)
        .join('\n');

const buildUserText = (data) => {
    const products = Array.isArray(data.products) && data.products.length
        ? `\n\nProducts noted: ${valueToText(data.products)}`
        : '';

    return `Hi ${getSubmitterName(data)},\n\nThank you for contacting VIVINE. We have received your inquiry and our team will get back to you within 24 hours.${products}\n\nRegards,\nTeam VIVINE`;
};

const createTransporter = () => {
    const host = process.env.EMAIL_HOST;
    const port = Number(process.env.EMAIL_PORT || 587);
    const secure = port === 465 || parseBool(process.env.EMAIL_SECURE);
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    if (!host || !user || !pass) {
        throw new Error('SMTP configuration is incomplete. Please set EMAIL_HOST, EMAIL_USER, and EMAIL_PASS.');
    }

    return nodemailer.createTransport({
        host,
        port,
        secure,
        auth: { user, pass },
    });
};

export async function POST(request) {
    let submission;

    try {
        submission = normalizeSubmission(await request.json());
    } catch {
        return Response.json(
            { status: 'error', message: 'Invalid form submission.' },
            { status: 400 }
        );
    }

    const sheetUrl = process.env.GOOGLE_SHEET_URL;
    const configuredOwnerRecipients = uniqueEmails([
        ...splitEmails(process.env.OWNER_EMAIL),
        ...splitEmails(process.env.SALES_EMAIL),
    ]);
    const userEmail = getUserEmail(submission);
    const normalizedUserEmail = comparableEmail(userEmail);
    const ownerRecipients = configuredOwnerRecipients.filter(
        (email) => comparableEmail(email) !== normalizedUserEmail
    );
    const skippedOwnerRecipients = configuredOwnerRecipients.filter(
        (email) => comparableEmail(email) === normalizedUserEmail
    );
    const fromAddress = process.env.EMAIL_FROM || process.env.EMAIL_USER;
    const replyAddress = ownerRecipients[0] || fromAddress;

    const responsePayload = { status: 'success', message: 'Submission received' };

    if (sheetUrl) {
        try {
            const res = await fetch(sheetUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(submission),
                redirect: 'follow',
            });
            const text = await res.text();
            try {
                responsePayload.sheet = JSON.parse(text);
            } catch {
                responsePayload.sheet = { status: 'success', raw: text };
            }
        } catch (err) {
            console.error('Google Sheet submission failed:', err);
            responsePayload.sheet = { status: 'error', message: err.message };
            responsePayload.status = 'warning';
            responsePayload.message = 'Google Sheet submission failed, but email processing was attempted.';
        }
    }

    if (!configuredOwnerRecipients.length) {
        return Response.json(
            {
                ...responsePayload,
                status: 'error',
                message: 'No owner recipient configured. Please set OWNER_EMAIL or SALES_EMAIL.',
                email: { owner: { status: 'skipped' } },
            },
            { status: 500 }
        );
    }

    try {
        const transporter = createTransporter();
        const submitterName = getSubmitterName(submission);
        const formType = getFormType(submission);

        if (ownerRecipients.length) {
            await transporter.sendMail({
                from: fromAddress,
                to: ownerRecipients,
                replyTo: userEmail || undefined,
                subject: `[VIVINE] ${formType} from ${submitterName}`,
                html: buildOwnerEmail(submission),
                text: buildOwnerText(submission),
            });
        }

        responsePayload.email = {
            owner: ownerRecipients.length
                ? { status: 'sent', to: ownerRecipients }
                : {
                    status: 'skipped',
                    message: 'Owner recipient matched the submitter email.',
                },
            user: { status: 'skipped', message: 'No user email supplied.' },
        };
        if (skippedOwnerRecipients.length) {
            responsePayload.email.owner.skipped = skippedOwnerRecipients;
        }

        if (userEmail) {
            await transporter.sendMail({
                from: fromAddress,
                to: userEmail,
                replyTo: replyAddress,
                subject: 'We received your VIVINE inquiry',
                html: buildUserEmail(submission),
                text: buildUserText(submission),
            });

            responsePayload.email.user = { status: 'sent', to: userEmail };
        }
    } catch (err) {
        console.error('Email send failed:', err);
        return Response.json(
            {
                ...responsePayload,
                status: 'error',
                message: 'Unable to send email. Please verify SMTP settings.',
                email: { status: 'error', message: err.message },
            },
            { status: 500 }
        );
    }

    return Response.json(responsePayload);
}
