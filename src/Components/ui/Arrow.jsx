import React from 'react';
import "../../style/arrow.css"
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

export const Left = props => {
  const { style, onClick } = props;
  return (
    <div
      className="slick-arrow-left"
      style={{ ...style, display: 'flex',alignItems:"center",justifyContent:"center",fontSize:"18px"  }}
      onClick={onClick}
    >
      <ArrowLeftOutlined />
    </div>
  );
};

export const Right = props => {
  const { style, onClick } = props;
  return (
    <div
      className="slick-arrow-right"
      style={{ ...style,  display: 'flex',alignItems:"center",justifyContent:"center",fontSize:"18px"  }}
      onClick={onClick}
    >
      <ArrowRightOutlined />
    </div>
  );
};
