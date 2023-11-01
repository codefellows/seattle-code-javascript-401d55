import SettingsProvider, { SettingsContext } from "./SettingsProvider";
import { render, screen, fireEvent } from '@testing-library/react';

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

  test('Consumer should be able to update HideComplete and DisplayItems', () => {
    render(
      <SettingsProvider>
        <SettingsContext.Consumer>
          {(settings) => {
            return  (<div>
                {/* Toggle Hide Complete! */}
                <p>{`${settings.hideCompleted}`}</p>
                <p>{settings.displayItems}</p>
                <button onClick={settings.toggleComplete}>toggle</button>
                <button onClick={() => settings.changeDisplayItems(6)}>displayItems</button>
              </div>
            )}
        }
        </SettingsContext.Consumer>
      </SettingsProvider>
    );

    fireEvent.click(screen.getByText('toggle'));
    fireEvent.click(screen.getByText('displayItems'));

    expect(screen.getByText('6')).toBeVisible();
    expect(screen.getByText('true')).toBeVisible();
  });
})