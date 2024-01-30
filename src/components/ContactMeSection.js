import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      comment:''
    },
    onSubmit: async (values) => {
      // Set Formik loading state to true
      formik.setSubmitting(true);

      try {
        // Call the submit function and wait for it to complete
        await submit('https://cat-fact.herokuapp.com/facts/', values);

        // Check the response type
        if (response.type === 'success') {
          // Display the success alert with the user's first name
          onOpen('success', `Submission successful. Thank you, ${values.firstName}!`);

          // Reset the form
          formik.resetForm();
        } else {
          // Display the error alert
          onOpen('error', `Submission failed. ${response.message || 'Please try again.'}`);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        // Set Formik loading state to false regardless of success or failure
        formik.setSubmitting(false);
      }
    
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      type: Yup.string().required('Type of enquiry is required'),
      comment: Yup.string().required('Your message is required'),
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  {...formik.getFieldProps('firstName')}
                  id="firstName"
                  name="firstName"
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl  isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  {...formik.getFieldProps('email')}
                  id="email"
                  name="email"
                  type="email"
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl >
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select {...formik.getFieldProps('type')} id="type" name="type">
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  {...formik.getFieldProps('comment')}
                  id="comment"
                  name="comment"
                  height={250}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
