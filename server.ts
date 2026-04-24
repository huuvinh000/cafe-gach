import express from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

// ===== API BOOKING =====
app.post("/api/booking", async (req, res) => {
  const { name, phone, people, time } = req.body;

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  console.log("BODY:", req.body);

  if (!token || !chatId) {
    console.error("Missing ENV");
    return res.status(500).json({ error: "Missing Telegram config" });
  }

  const text = `
📢 GẠCH CAFE - BOOKING

👤 Khách: ${name}
📞 SĐT: ${phone}
👥 Số người: ${people}
⏰ Thời gian: ${time}
  `;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      }
    );

    const data = await response.json();
    console.log("TELEGRAM:", data);

    if (!data.ok) {
      throw new Error("Telegram error");
    }

    res.json({ success: true });
  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json({ error: "Send failed" });
  }
});

// ===== SERVE FRONTEND =====
const __dirname = new URL('.', import.meta.url).pathname;
const distPath = path.join(__dirname, "dist");

app.use(express.static(distPath));

// ⚠️ fallback phải đặt CUỐI
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
