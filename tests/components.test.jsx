import { render, screen } from '@testing-library/react';
import { it, expect } from 'vitest';
import TodoForm from "../src/components/TodoForm";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

it("ska skapa en uppgift när användaren skriver en giltig titel", async () => {
    const user = userEvent.setup();
    const mockOnAddTask = vi.fn().mockResolvedValue(true);

    render(<TodoForm onAddTask={mockOnAddTask} isSaving={false} buttonVariant="A" />);

    const input = screen.getByRole("textbox", { name: "Ny uppgift" });
    const button = screen.getByRole("button", { name: "Lägg till" });

    await user.type(input, "Plugga");
    await user.click(button);

    expect(mockOnAddTask).toHaveBeenCalledWith("Plugga");
});