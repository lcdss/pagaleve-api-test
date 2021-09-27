import { Button, TextField } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Customer } from '../types';
import { DatePicker } from '@mui/lab';
import { Box } from '@mui/system';
import type { Dayjs } from 'dayjs';

interface CheckoutFormProps {
  onSubmit: SubmitHandler<Customer>;
}

const stubCustomerData = {
  name: 'Pedro Cabral',
  cpf: '07068093868',
  phone: '11987654321',
  email: 'pedro.c@gmail.com',
  dateBirth: new Date('1980-07-01 12:00:00'),
};

const schema = z.object({
  name: z.string().min(1).max(50),
  cpf: z.string().regex(/\d{11}/, 'CPF invalid. Example: 11122233344'),
  phone: z.string().regex(/\d{11}/, 'Phone invalid. Example: 11987654321'),
  email: z.string().email().max(50),
  dateBirth: z.date(),
});

export default function CheckoutForm({ onSubmit }: CheckoutFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: stubCustomerData,
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="name"
        render={({ field: { value, onChange } }) => (
          <TextField
            label="Name"
            value={value}
            onChange={onChange}
            error={!!errors.name}
            helperText={errors.name?.message}
            margin="normal"
            fullWidth
          />
        )}
      />
      <Controller
        control={control}
        name="cpf"
        render={({ field: { value, onChange } }) => (
          <TextField
            label="CPF"
            value={value}
            onChange={onChange}
            error={!!errors.cpf}
            helperText={errors.cpf?.message}
            margin="normal"
            fullWidth
          />
        )}
      />
      <Controller
        control={control}
        name="phone"
        render={({ field: { value, onChange } }) => (
          <TextField
            label="Phone"
            value={value}
            onChange={onChange}
            error={!!errors.phone}
            helperText={errors.phone?.message}
            margin="normal"
            fullWidth
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field: { value, onChange } }) => (
          <TextField
            label="E-mail"
            value={value}
            onChange={onChange}
            error={!!errors.email}
            helperText={errors.email?.message}
            margin="normal"
            fullWidth
          />
        )}
      />
      <Controller
        control={control}
        name="dateBirth"
        render={({ field: { value, onChange } }) => (
          <DatePicker
            label="Date of Birth"
            value={value ?? null}
            onChange={(newDate: Dayjs | null) => {
              onChange(newDate?.toDate());
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                error={!!errors.dateBirth}
                helperText={errors.dateBirth?.message}
                margin="normal"
                fullWidth
              />
            )}
            disableFuture
          />
        )}
      />
      <Box sx={{ mt: 2 }}>
        <Button type="submit" variant="contained">
          Pay with Pagaleve
        </Button>
      </Box>
    </form>
  );
}
