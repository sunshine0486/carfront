import { Stack, TextField } from "@mui/material";
import type { Car } from "../type"

type CarDialogContentProps = {
          car: Car;
          handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CarDialogContent({car, handleChange}: CarDialogContentProps)
{
          return (
            <>
                <Stack spacing={2} mt={1}>
                    <TextField label="제조사"
                               name="brand"
                               value={car.brand}
                               onChange={handleChange} />
                    <TextField label="모델"
                               name="model"
                              value={car.model}
                                onChange={handleChange} />
                    <TextField label="색상"
                               name="color"
                               value={car.color}
                               onChange={handleChange} />
                    <TextField label="연식"
                               name="modelYear"
                               value={car.modelYear}
                               onChange={handleChange} />
                    <TextField label="등록번호"
                               name="registrationNumber"
                               value={car.registrationNumber}
                               onChange={handleChange} /> 
                    <TextField label="가격"
                               name="price"
                               value={car.price}
                               onChange={handleChange} />
                </Stack>
            </>    
          )
}