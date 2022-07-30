import React, { useEffect, useState, useRef } from "react";
import "../TextInput.css";

interface SearchBarProps {
	handleSearchChange: (text: String) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleSearchChange }: SearchBarProps) => {
	const input = useRef<HTMLInputElement>(null);

	const handleChange = () => {
		if (input.current) handleSearchChange(input.current.value);
	};

	return (
		<div className="TextInput" style={{ width: "30%", borderRadius: "0.5em" }}>
			<input
				type={"text"}
				className="text-input"
				name="search-input"
				placeholder="Search"
				ref={input}
				onChange={handleChange}
			></input>
		</div>
	);
};

export default SearchBar;
