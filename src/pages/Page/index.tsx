import React from 'react';

import {
    AboutHero,
    Hero,
    HiringWorldwide,
    Section,
    Title,
    TrustBar,
} from '@homework-task/components';
import { Page } from '@homework-task/types';

export const PageGenerator = ({ data }: { data: Page[] }) => {
    return (
        <React.Fragment>
            {data.map((section, rootComponentIndex) => {
                let RootComponentType;

                switch (section.type) {
                    case 'section':
                        RootComponentType = Section;
                        break;
                    default:
                        alert(`Unknown root component type: ${section.type}`);
                        return (RootComponentType = (
                            <React.Fragment></React.Fragment>
                        ));
                }

                return (
                    <RootComponentType
                        key={`${rootComponentIndex}_${section.type}`}
                        {...section.props}
                    >
                        {section.components.map((component, componentIndex) => {
                            let ComponentType;

                            switch (component.type) {
                                case 'hero':
                                    ComponentType = Hero;
                                    break;
                                case 'trustBar':
                                    ComponentType = TrustBar;
                                    break;
                                case 'title':
                                    ComponentType = Title;
                                    break;
                                case 'aboutHero':
                                    ComponentType = AboutHero;
                                    break;
                                case 'hiringWorldwide':
                                    ComponentType = HiringWorldwide;
                                    break;
                                default:
                                    alert(
                                        `Unknown component type: ${component.type}`
                                    );
                                    return (RootComponentType = (
                                        <React.Fragment></React.Fragment>
                                    ));
                            }

                            return (
                                <ComponentType
                                    key={`${componentIndex}_${component.type}`}
                                    {...component.props}
                                />
                            );
                        })}
                    </RootComponentType>
                );
            })}
        </React.Fragment>
    );
};
