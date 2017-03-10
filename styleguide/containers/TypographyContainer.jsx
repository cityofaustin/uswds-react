import React from "react";
import { DocsPage, DocsSection, DocsExample, DocsPreview } from './Docs.jsx';

/**
 * Displays the Styleguide content for Typography.
 */
export default class TypographyContainer extends React.Component
{
  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render()
  {
    return (
      <DocsPage title="Typography"></DocsPage>
    );
  }
}
