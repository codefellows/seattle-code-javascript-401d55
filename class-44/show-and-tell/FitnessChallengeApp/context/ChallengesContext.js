import React, { createContext, useState } from 'react';

export const ChallengesContext = createContext();

export const ChallengesProvider = ({ children }) => {
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const [savedImages, setSavedImages] = useState([]);

  const addImage = (imagePath) => {
    setSavedImages((prevImages) => [...prevImages, imagePath]);
  };

  const deleteImage = (imagePath) => {
    setSavedImages((prevImages) => prevImages.filter(image => image !== imagePath));
  };

  return (
    <ChallengesContext.Provider value={{ completedChallenges, setCompletedChallenges, savedImages, setSavedImages, addImage, deleteImage }}>
      {children}
    </ChallengesContext.Provider>
  );
};
