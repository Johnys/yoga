import styled from 'styled-components';
import { oneOf, bool } from 'prop-types';
import textStyle from '../textStyle';

const styledText = type => styled.Text`
  ${textStyle(type)}
`;

const H1 = styledText('h1');
H1.displayName = 'Text.H1';

const H2 = styledText('h2');
H2.displayName = 'Text.H2';

const H3 = styledText('h3');
H3.displayName = 'Text.H3';

const H4 = styledText('h4');
H4.displayName = 'Text.H4';

const H5 = styledText('h5');
H5.displayName = 'Text.H4';

const Small = styledText('small');
Small.displayName = 'Text.Small';

const Tiny = styledText('tiny');
Tiny.displayName = 'Text.Tiny';

const Text = styledText('p');

Text.displayName = 'Text';

Text.propTypes = {
  inverted: bool,
  /** style the text following the theme (primary, secondary, tertiary) */
  variant: oneOf(['primary', 'secondary', 'tertiary']),
};

Text.defaultProps = {
  inverted: false,
  variant: undefined,
};

export { Text, H1, H2, H3, H4, H5, Small, Tiny };
