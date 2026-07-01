import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Guestlist!A:K",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toLocaleString("en-US", {
              timeZone: "America/Los_Angeles",
            }),
            body.name || "",
            body.attending || "",
            body.selectedEvents?.includes("🌿 Mehendi") ? "Yes" : "No",
            body.selectedEvents?.includes("🎤 Sangeet") ? "Yes" : "No",
            body.selectedEvents?.includes("🌼 Haldi") ? "Yes" : "No",
            body.selectedEvents?.includes("💍 Wedding Ceremony") ? "Yes" : "No",
            body.selectedEvents?.includes("🍽️ Dinner") ? "Yes" : "No",
            body.plusOne || "",
            body.plusOneName || "",
            body.note || "",
          ],
        ],
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("RSVP submit error:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to submit RSVP" },
      { status: 500 }
    );
  }
}