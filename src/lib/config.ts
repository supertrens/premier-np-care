export const bookingUrl =
  process.env.NEXT_PUBLIC_BOOKING_URL?.trim() ||
  "https://cal.com/virginie-chavannes-premiernpcare/20-minutes-consultation";

export const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER?.trim() || "";

export const isPhoneConfirmed = phoneNumber.length > 0;
