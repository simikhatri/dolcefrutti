'use client';
import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { StyledInput } from './style';
import { Box } from '@mui/material';

type Props = {
    value: Date | null;
    onChange: (value: Date | null) => void;
};

const SchedulePicker = ({ value, onChange }: Props) => {
    return (
        <Box>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    value={value}
                    onChange={onChange}
                    enableAccessibleFieldDOMStructure={false}
                    slots={{ textField: StyledInput }}
                />
            </LocalizationProvider>
        </Box>
    );
};

export default SchedulePicker;
