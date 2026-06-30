export const bookingUrl =
  process.env.NEXT_PUBLIC_BOOKING_URL?.trim() || "#booking-placeholder";

export const isBookingPlaceholder = bookingUrl === "#booking-placeholder";

