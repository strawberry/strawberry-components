/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface ScDrawer {
        "backgroundColour"?: string;
        "buttonText": string;
        "desktopWidth"?: string;
        "drawerName": string;
        "textColour"?: string;
    }
    interface ScDrawerButton {
        "buttonText": string;
        "drawerName": string;
    }
    interface ScHeroBanner {
        /**
          * Optional background colour.
         */
        "backgroundColour"?: string;
        /**
          * Optional font size..
         */
        "fontSize"?: string;
        /**
          * Optional Heading level.
         */
        "headingLevel"?: number;
        /**
          * Horizontal position.
         */
        "horizontalPosition": string;
        /**
          * Optional Spacing.
         */
        "spacing"?: string;
        /**
          * Hero text.
         */
        "text": string;
        /**
          * Optional text align.
         */
        "textAlign"?: string;
        /**
          * Optional text colour.
         */
        "textColour"?: string;
        /**
          * Vertical position.
         */
        "verticalPosition": string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLScDrawerElement extends Components.ScDrawer, HTMLStencilElement {
    }
    var HTMLScDrawerElement: {
        prototype: HTMLScDrawerElement;
        new (): HTMLScDrawerElement;
    };
    interface HTMLScDrawerButtonElement extends Components.ScDrawerButton, HTMLStencilElement {
    }
    var HTMLScDrawerButtonElement: {
        prototype: HTMLScDrawerButtonElement;
        new (): HTMLScDrawerButtonElement;
    };
    interface HTMLScHeroBannerElement extends Components.ScHeroBanner, HTMLStencilElement {
    }
    var HTMLScHeroBannerElement: {
        prototype: HTMLScHeroBannerElement;
        new (): HTMLScHeroBannerElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "sc-drawer": HTMLScDrawerElement;
        "sc-drawer-button": HTMLScDrawerButtonElement;
        "sc-hero-banner": HTMLScHeroBannerElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface ScDrawer {
        "backgroundColour"?: string;
        "buttonText"?: string;
        "desktopWidth"?: string;
        "drawerName"?: string;
        "onSc:drawer:toggle"?: (event: CustomEvent<any>) => void;
        "textColour"?: string;
    }
    interface ScDrawerButton {
        "buttonText"?: string;
        "drawerName"?: string;
        "onSc:drawer:toggle"?: (event: CustomEvent<any>) => void;
    }
    interface ScHeroBanner {
        /**
          * Optional background colour.
         */
        "backgroundColour"?: string;
        /**
          * Optional font size..
         */
        "fontSize"?: string;
        /**
          * Optional Heading level.
         */
        "headingLevel"?: number;
        /**
          * Horizontal position.
         */
        "horizontalPosition"?: string;
        /**
          * Optional Spacing.
         */
        "spacing"?: string;
        /**
          * Hero text.
         */
        "text"?: string;
        /**
          * Optional text align.
         */
        "textAlign"?: string;
        /**
          * Optional text colour.
         */
        "textColour"?: string;
        /**
          * Vertical position.
         */
        "verticalPosition"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "sc-drawer": ScDrawer;
        "sc-drawer-button": ScDrawerButton;
        "sc-hero-banner": ScHeroBanner;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "sc-drawer": LocalJSX.ScDrawer & JSXBase.HTMLAttributes<HTMLScDrawerElement>;
            "sc-drawer-button": LocalJSX.ScDrawerButton & JSXBase.HTMLAttributes<HTMLScDrawerButtonElement>;
            "sc-hero-banner": LocalJSX.ScHeroBanner & JSXBase.HTMLAttributes<HTMLScHeroBannerElement>;
        }
    }
}
