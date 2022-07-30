import React, { useEffect, useState, useRef } from "react";
import "./LoadingIcon.css";

const LoadingIcon: React.FC = () => {
	return (
		<div className="lds-facebook">
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default LoadingIcon;
