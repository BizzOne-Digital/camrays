import nodemailer from 'nodemailer';

interface OrderItem {
  name: string;
  price: number;
  qty: number;
  size?: string;
  scent?: string;
}

interface OrderEmailInput {
  orderId: string;
  customer: { name: string; phone: string; address: string };
  items: OrderItem[];
  total: number;
}

export async function sendOrderNotification(order: OrderEmailInput) {
  const { GMAIL_USER, GMAIL_APP_PASSWORD, ORDER_NOTIFICATION_EMAIL } = process.env;
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !ORDER_NOTIFICATION_EMAIL) return;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  });

  const itemLines = order.items
    .map((i) => `- ${i.name}${i.size ? ` (${i.size})` : ''}${i.scent ? ` — ${i.scent}` : ''} x${i.qty} — $${(i.price * i.qty).toFixed(2)}`)
    .join('\n');

  await transporter.sendMail({
    from: GMAIL_USER,
    to: ORDER_NOTIFICATION_EMAIL,
    subject: `New Order #${order.orderId.slice(-6)} — CamRay's Prodigious Pomade`,
    text: `New order received!\n\nCustomer: ${order.customer.name}\nPhone: ${order.customer.phone}\nAddress: ${order.customer.address}\n\nItems:\n${itemLines}\n\nTotal: $${order.total.toFixed(2)}`,
  });
}
