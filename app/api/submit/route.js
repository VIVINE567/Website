export async function POST(request) {
    const body = await request.json();

    const sheetUrl = process.env.GOOGLE_SHEET_URL;

    if (!sheetUrl) {
        console.log("Mock Submission (Sheet URL missing):", body);
        await new Promise(resolve => setTimeout(resolve, 1000));
        return Response.json({ status: "success", message: "Mock submission successful" });
    }

    try {
        const res = await fetch(sheetUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
            redirect: "follow",
        });

        const text = await res.text();

        let data;
        try {
            data = JSON.parse(text);
        } catch {
            data = { status: "success", raw: text };
        }

        return Response.json(data);
    } catch (err) {
        return Response.json(
            { status: "error", message: err.message },
            { status: 500 }
        );
    }
}
