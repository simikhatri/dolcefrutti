'use client';
import React, { useState } from 'react';
import {
    ContactWrapper,
    ContactContent,
    InfoBox,
    InfoItem,
    InfoTitle,
    InfoText,
    FormBox,
    FormHeading,
    StyledInput,
    StyledTextArea,
    SubmitButton,
    FormGrid,
    FormLabel,
    StyledPhoneInput,
} from './style';
import { Box } from '@mui/material';
import dynamic from 'next/dynamic';

const SchedulePicker = dynamic(() => import('./DatePicker'), { ssr: false });

const ContactSection = () => {
    const [phone, setPhone] = useState('');
    const [schedule, setSchedule] = useState<Date | null>(null);

    return (
        <ContactWrapper>
            <ContactContent>
                <InfoBox>
                    <InfoItem>
                        <InfoTitle>Address</InfoTitle>
                        <InfoText>72-811 Hwy 111, Ste 1052 Palm Desert CA 92260</InfoText>
                    </InfoItem>
                    <InfoItem>
                        <InfoTitle>Billing Inquiries</InfoTitle>
                        <InfoText>760.786.7786</InfoText>
                    </InfoItem>
                    <InfoItem>
                        <InfoTitle>Information & Sales</InfoTitle>
                        <InfoText>info@dolcefrutti.com</InfoText>
                    </InfoItem>
                    <InfoItem>
                        <InfoTitle>Support</InfoTitle>
                        <InfoText>support@dolcefrutti.com</InfoText>
                    </InfoItem>
                    <InfoItem>
                        <InfoTitle>Shop</InfoTitle>
                        <InfoText>shop@dolcefrutti.com</InfoText>
                    </InfoItem>
                    <InfoItem>
                        <InfoTitle>Post-sale Service</InfoTitle>
                        <InfoText>customerservice@dolcefrutti.com</InfoText>
                    </InfoItem>
                </InfoBox>

                <FormBox>
                    <FormHeading>
                        Contact Us
                    </FormHeading>
                    <FormGrid>
                        <Box>
                            <FormLabel>Full Name</FormLabel>
                            <StyledInput fullWidth variant="outlined" />
                        </Box>
                        <Box>
                            <FormLabel>Email</FormLabel>
                            <StyledInput fullWidth variant="outlined" />
                        </Box>
                    </FormGrid>
                    <Box>
                        <FormLabel>Address</FormLabel>
                        <StyledInput fullWidth variant="outlined" />
                    </Box>
                    <FormGrid>
                        <Box>
                            <FormLabel>Phone Number</FormLabel>
                            <StyledPhoneInput
                                country={'us'}
                                value={phone}
                                onChange={setPhone}
                                inputProps={{
                                    name: 'phone',
                                    required: true,
                                }}
                            />
                        </Box>
                        <Box>
                            <FormLabel>Schedule</FormLabel>
                            <SchedulePicker value={schedule} onChange={setSchedule} />
                        </Box>
                    </FormGrid>
                    <Box>
                        <FormLabel>How can we help?</FormLabel>
                        <StyledTextArea multiline rows={4} fullWidth variant="outlined" />
                    </Box>
                    <SubmitButton>Submit</SubmitButton>
                </FormBox>
            </ContactContent>
        </ContactWrapper>
    );
};

export default ContactSection;