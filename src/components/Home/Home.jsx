import Select from '../Select/Select'
import FormButton from '../FormButton/FormButton';
import InputData from '../InputData/InputData';
import TextArea from '../TextArea/TextArea';
import InputTime from '../InputTime/InputTime';
import styles from './Home.module.css'
import React, { useState } from "react";
const towers = ["А", "Б"];
const floors = Array.from({ length: 25 }, (_, i) => i + 3);
const meetingRooms = Array.from({ length: 10 }, (_, i) => i + 1);


export const BookingForm = () => {
  const [formData, setFormData] = useState({
    tower: "",
    floor: "",
    meetingRoom: "",
    date: "",
    startTime: "",
    endTime:"",
    comment: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      tower: "",
      floor: "",
      meetingRoom: "",
      date: "",
      startTime: "",
      endTime:"",
      comment: "",
    });
  };

  const handleClear = () => {
    setFormData({
      tower: "",
      floor: "",
      meetingRoom: "",
      date: "",
      startTime: "",
      endTime:"",
      comment: "",
    });
  };

  return (
    <form className={styles.formData} onSubmit={handleSubmit}>
      <Select label="Башня" name="tower" value={formData.tower} options={towers} onChange={handleChange} />
      <Select label="Этаж" name="floor" value={formData.floor} options={floors} onChange={handleChange} />
      <Select label="Переговорка" name="meetingRoom" value={formData.meetingRoom} options={meetingRooms} onChange={handleChange} />
      <InputData label="Дата" name="date" value={formData.date} onChange={handleChange} type="date" />
      <InputTime label="Начало с" name="startTime" value={formData.startTime} onChange={handleChange} />
      <InputTime label="До" name="endTime" value={formData.endTime} onChange={handleChange} />
      <TextArea label="Комментарий" name="comment" value={formData.comment} onChange={handleChange} />
      <FormButton label="Submit" type="submit" />
      <FormButton label="Clear" type="btn" onClick={handleClear}/>
    </form>
  )
}

export default BookingForm