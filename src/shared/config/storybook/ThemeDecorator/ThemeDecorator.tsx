import { StoryFn } from '@storybook/react';
import { Theme } from 'shared/const/theme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
