import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from '../sections/Hero';

describe('Hero Component', () => {
  it('renders hero section with title', () => {
    render(<Hero />);
    
    expect(screen.getByText('Perjalanan Nyaman & Aman')).toBeInTheDocument();
    expect(screen.getByText(/Nikmati perjalanan yang terbaik/)).toBeInTheDocument();
  });

  it('renders booking form with all fields', () => {
    render(<Hero />);
    
    expect(screen.getByPlaceholderText('Pilih kota asal')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Pilih kota tujuan')).toBeInTheDocument();
    expect(screen.getByDisplayValue('')).toBeInTheDocument(); // Date input
    expect(screen.getByText('Pilih waktu')).toBeInTheDocument();
  });

  it('updates form data when inputs change', () => {
    render(<Hero />);
    
    const originInput = screen.getByPlaceholderText('Pilih kota asal');
    const destinationInput = screen.getByPlaceholderText('Pilih kota tujuan');
    
    fireEvent.change(originInput, { target: { value: 'Surabaya' } });
    fireEvent.change(destinationInput, { target: { value: 'Solo' } });
    
    expect(originInput).toHaveValue('Surabaya');
    expect(destinationInput).toHaveValue('Solo');
  });

  it('renders action buttons', () => {
    render(<Hero />);
    
    expect(screen.getByText('Cek Tarif Saja')).toBeInTheDocument();
    expect(screen.getByText('Cari Tiket')).toBeInTheDocument();
  });

  it('renders chat support section', () => {
    render(<Hero />);
    
    expect(screen.getByText('Chat tiket dan call tarif')).toBeInTheDocument();
    expect(screen.getByText('Hubungi Kami')).toBeInTheDocument();
  });

  it('handles form submission', () => {
    render(<Hero />);
    
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    
    // Form should handle submission without errors
    expect(form).toBeInTheDocument();
  });

  it('renders time select options', () => {
    render(<Hero />);
    
    const timeSelect = screen.getByDisplayValue('');
    fireEvent.click(timeSelect);
    
    expect(screen.getByText('06:00')).toBeInTheDocument();
    expect(screen.getByText('09:00')).toBeInTheDocument();
    expect(screen.getByText('12:00')).toBeInTheDocument();
  });
});