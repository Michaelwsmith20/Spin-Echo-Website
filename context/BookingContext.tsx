"use client";

import React, { createContext, useContext, useState } from 'react';
import BookingModal from '../components/BookingModal';

const BookingContext = createContext({ openModal: () => {} });

export const useBooking = () => useContext(BookingContext);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <BookingContext.Provider value={{ openModal }}>
      {children}
      <BookingModal isOpen={isOpen} onClose={closeModal} />
    </BookingContext.Provider>
  );
}