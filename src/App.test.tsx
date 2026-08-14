import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from './App';

describe('showcase', () => { it('renders both reference groups', () => { render(<App/>); expect(screen.getByText('Nature-led essentials')).toBeInTheDocument(); expect(screen.getByText('High-energy tech retail')).toBeInTheDocument(); }); });
