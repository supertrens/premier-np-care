export const bookingUrl =
  process.env.NEXT_PUBLIC_BOOKING_URL?.trim() ||
  "https://d2oe0ra32qx05a.cloudfront.net/?practiceKey=k_1_115955";

export const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER?.trim() || "";

export const isPhoneConfirmed = phoneNumber.length > 0;
