import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { useForm } from "react-hook-form";

interface Props {
  onSearch: (search: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit((data) => onSearch(data.name))}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />}></InputLeftElement>
        <Input
          {...register("name")}
          borderRadius={20}
          placeholder="Search games..."
          variant={"filled"}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
