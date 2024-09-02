import { FC } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

export const NextArrow: FC<ArrowProps> = ({ className, style, onClick }) => (
    <div
        className={`${className} absolute top-1/2 transform -translate-y-1/2 right-0 z-10 cursor-pointer text-gray-800`}
        style={{ ...style, display: "block", fontSize: "30px" }}
        onClick={onClick}
    >
        <FaChevronRight className="text-gray-400" />
    </div>
);

export const PrevArrow: FC<ArrowProps> = ({ className, style, onClick }) => (
    <div
        className={`${className} absolute top-1/2 transform -translate-y-1/2 left-0 z-10 cursor-pointer text-gray-800`}
        style={{ ...style, display: "block", fontSize: "30px" }}
        onClick={onClick}
    >
        <FaChevronLeft className="text-gray-400" />
    </div>
);
