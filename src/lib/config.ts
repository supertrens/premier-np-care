export const bookingUrl =
  process.env.NEXT_PUBLIC_BOOKING_URL?.trim() || "#booking-placeholder";

export const isBookingPlaceholder = bookingUrl === "#booking-placeholder";

export const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER?.trim() || "";

export const isPhoneConfirmed = phoneNumber.length > 0;

