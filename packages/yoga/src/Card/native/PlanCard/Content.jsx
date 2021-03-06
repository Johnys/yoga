import React, { useContext } from 'react';
import styled from 'styled-components';
import { string, node } from 'prop-types';

import Content from '../Card/Content';
import PlanCardContext from './PlanCardContext';

import Text from '../../../Text';

const Title = styled(Text.Small)`
  ${({
    variant,
    theme: {
      yoga: {
        components: {
          card: { plan },
        },
        colors: { white, dark },
      },
    },
  }) => `
  height: 40px;
  margin-top: ${plan.title.margin.top}px;
  margin-bottom: ${plan.title.margin.bottom}px;

  color: ${variant ? white : dark};
`}
`;

const Price = styled(Text.H5)`
  ${({
    variant,
    theme: {
      yoga: {
        components: {
          card: { plan },
        },
        colors: { white, dark },
      },
    },
  }) => `
  margin-top: ${plan.price.margin.top}px;

  color: ${variant ? white : dark};
  `}
`;
const Period = styled(Text.Small)`
  ${({
    variant,
    theme: {
      yoga: {
        components: {
          card: { plan },
        },
        colors: { white, dark },
      },
    },
  }) => `
  margin-bottom: ${plan.period.margin.bottom}px;

  color: ${variant ? white : dark};
  `}
`;

const PlanCardContent = ({ title, price, period, children }) => {
  const { variant } = useContext(PlanCardContext);

  return (
    <Content>
      {title && (
        <Title variant={variant} numberOfLines={2}>
          {title}
        </Title>
      )}
      {price && <Price variant={variant}>{price}</Price>}
      {period && <Period variant={variant}>{period}</Period>}

      {children}
    </Content>
  );
};

PlanCardContent.propTypes = {
  title: string.isRequired,
  price: string.isRequired,
  period: string.isRequired,
  children: node,
};

PlanCardContent.defaultProps = {
  children: null,
};

PlanCardContent.displayName = 'PlanCard.Content';

export default PlanCardContent;
