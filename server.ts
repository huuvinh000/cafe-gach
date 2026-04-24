import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Telegram Booking
  app.post("https://cafe-gach-production.up.railway.app/api/booking", async (req, res) => {
    const { name, phone, people, time } = req.body;
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.warn("Telegram credentials not configured");
      return res.status(200).json({ success: true, message: "Demo mode: config missing" });
    }

    try {
      const text = `
📢 GẠCH CAFE - BOOKING
  (Yêu cầu đặt bàn mới)
👤 Khánh hàng: ${name}
📞 SĐT: ${phone}
👥 Số người: ${people}
⏰ Thời gian: ${time}
      `;
      
      const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        })
      });

      if (!response.ok) {
        throw new Error(`Telegram API error: ${response.statusText}`);
      }

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Booking error:", error);
      res.status(500).json({ error: "Failed to send" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
