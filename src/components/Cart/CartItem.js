import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Button from "../Button";
import { incrementQuantity, decrementQuantity, removeItem } from "../../state/cart/cart";

const CartItem = ({ id, title, price, image, quantity }) => {
  const cartItem = { id, title, price, image, quantity };
  const product = { id, title, price, image };

  return (
    <CartItemCardWrapper>
      <ImageContainer>
        <Image src={image}></Image>
      </ImageContainer>
      <Details>
        <Title></Title>
        <div>
          {/* price */}
        </div>
        <AmountChanger>
          <Button
            content={<FaMinus />}
            color="grey"
            animation="color"
          ></Button>
          <div>{cartItem.quantity}</div>
          <Button
            content={<FaPlus />}
            color="grey"
            animation="color"
          ></Button>
        </AmountChanger>
      </Details>
    </CartItemCardWrapper>
  );
};

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

const CartItemCardWrapper = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  height: 13rem;
  width: 20%;
  margin: auto;
`;

const Image = styled.img`
  width: auto;
  height: 100%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 2rem;
`;

const Title = styled.div`
  height: 3rem;
  font-weight: bold;
  overflow: hidden;
`;

const AmountChanger = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export default CartItem;
