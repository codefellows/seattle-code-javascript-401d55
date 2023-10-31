import SettingsProvider, { SettingsContext } from "./SettingsProvider";
import { render, screen } from '@testing-library/react';

describe('Setting context', () => {
  test('Should give sort, hideCompleted, and display Items to children', () => {
    render(
      <SettingsProvider>
        <SettingsContext.Consumer>
          {(context) => (
            <>
              <p>{context.sort}</p>
              <p>{context.displayItems}</p>
              <p>{`${context.hideCompleted}`}</p>
            </>
          )}
        </SettingsContext.Consumer>
      </SettingsProvider>
    );
    expect(screen.getByText('3')).toBeVisible();
    expect(screen.getByText('false')).toBeVisible();
    expect(screen.getByText('difficulty')).toBeVisible();
  });
})