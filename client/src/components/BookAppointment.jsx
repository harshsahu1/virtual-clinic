import React, { useState } from 'react';
import '../styles/bookappointment.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import { IoMdClose } from 'react-icons/io';

const BookAppointment = ({ setModalOpen, ele }) => {
  const [formDetails, setFormDetails] = useState({
    date: '',
    time: '',
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const bookAppointment = async (e) => {
    let dateString = formDetails.date;
    let timeString = formDetails.time;
    console.log(dateString, timeString);
    let dateParts = dateString.split('-');
    let year = parseInt(dateParts[0]);
    let month = parseInt(dateParts[1]) - 1;
    let day = parseInt(dateParts[2]);

    let timeParts = timeString.split(':');
    let hours = parseInt(timeParts[0]);
    let minutes = parseInt(timeParts[1]);

    let providedDateTime = new Date(year, month, day, hours, minutes);
    let currentDateTime = new Date();

    if (
      dateString.length === 0 ||
      timeString.length === 0 ||
      providedDateTime <= currentDateTime
    ) {
      e.preventDefault();
      try {
        await toast.promise(
          axios.post(
            '/appointment/bookapp',
            {
              doctorId: ele?.userId?._id,
              date: formDetails.date,
              time: formDetails.time,
              doctorname: `${ele?.userId?.firstname} ${ele?.userId?.lastname}`,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
            }
          ),
          {
            success: 'Appointment booked successfully',
            error: 'Invalid Time',
            loading: 'Booking appointment...',
          }
        );
        setModalOpen(false);
      } catch (error) {
        return error;
      }
    } else {
      e.preventDefault();
      console.log(formDetails);
      try {
        await toast.promise(
          axios.post(
            '/appointment/bookappointment',
            {
              doctorId: ele?.userId?._id,
              date: formDetails.date,
              time: formDetails.time,
              doctorname: `${ele?.userId?.firstname} ${ele?.userId?.lastname}`,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
            }
          ),
          {
            success: 'Appointment booked successfully',
            error: 'Unable to book appointment',
            loading: 'Booking appointment...',
          }
        );
        setModalOpen(false);
      } catch (error) {
        return error;
      }
    }
  };

  return (
    <>
      <div className='modal flex-center'>
        <div className='modal__content'>
          <h2 className='page-heading'>Book Appointment</h2>
          <IoMdClose
            onClick={() => {
              setModalOpen(false);
            }}
            className='close-btn'
          />
          <div className='register-container flex-center book'>
            <form className='register-form'>
              <input
                type='date'
                name='date'
                className='form-input'
                value={formDetails.date}
                onChange={inputChange}
              />
              <input
                type='time'
                name='time'
                className='form-input'
                value={formDetails.time}
                onChange={inputChange}
              />
              <button
                type='submit'
                className='btn form-btn'
                onClick={bookAppointment}
              >
                book
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAppointment;
