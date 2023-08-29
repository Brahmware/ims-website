import React from 'react';
import Icon from '@icons/utility/CartIcon';
import { styled } from '@mui/system';
import IconButton from '@components/Button/IconButton';
import Indicator from './Indicator';

const CartIcon = styled(Icon)(({ theme }) => ({

  ...theme.Sizes.icon.small,
  '& path': {
    stroke: theme.palette.primary.contrastText,
    transition: theme.Transitions.createTransition({
      property: 'stroke',
      duration: 'shorter',
      easing: 'easeInOut'
    }),
  },
}));

const CartIconBtn = styled(IconButton)(({ theme }) => ({
  margin: `0 ${theme.Spaces.xs}`,
}));

const itemsInCart = 6;
const getItemsInCart = () => itemsInCart > 5 ? '5+' : itemsInCart;

const Cart = () => {
  return (
    <CartIconBtn
      aria-label="cart"
      vocab='Cart'
      onClick={() => window.alert('cart button was clicked')}
    >
      <Indicator
        variant='h4'
        content='span'
      >
        {getItemsInCart()}
      </Indicator>
      <CartIcon />
    </CartIconBtn>
  )
};

export default Cart;