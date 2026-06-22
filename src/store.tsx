import React, { createContext, useContext, useState, useEffect } from 'react';
import { Course, INITIAL_COURSES } from './types';

interface StoreContextType {
  courses: Course[];
  coachPhoto: string | null;
  addCourse: (course: Course) => void;
  updateCourse: (id: string, updatedCourse: Course) => void;
  deleteCourse: (id: string) => void;
  setCoachPhoto: (photoBase64: string | null) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [courses, setCourses] = useState<Course[]>([]);
  const [coachPhoto, setCoachPhotoState] = useState<string | null>(null);

  useEffect(() => {
    const storedCourses = localStorage.getItem('coach_clement_courses');
    if (storedCourses) {
      try {
        const parsed = JSON.parse(storedCourses);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setCourses(parsed);
        } else {
          setCourses(INITIAL_COURSES);
        }
      } catch (e) {
        setCourses(INITIAL_COURSES);
      }
    } else {
      setCourses(INITIAL_COURSES);
      localStorage.setItem('coach_clement_courses', JSON.stringify(INITIAL_COURSES));
    }

    const storedPhoto = localStorage.getItem('coach_clement_photo');
    if (storedPhoto) {
      setCoachPhotoState(storedPhoto);
    }
  }, []);

  const addCourse = (course: Course) => {
    const updated = [...courses, course];
    setCourses(updated);
    localStorage.setItem('coach_clement_courses', JSON.stringify(updated));
  };

  const updateCourse = (id: string, updatedCourse: Course) => {
    const updated = courses.map(c => c.id === id ? updatedCourse : c);
    setCourses(updated);
    localStorage.setItem('coach_clement_courses', JSON.stringify(updated));
  };

  const deleteCourse = (id: string) => {
    const updated = courses.filter((c) => c.id !== id);
    setCourses(updated);
    localStorage.setItem('coach_clement_courses', JSON.stringify(updated));
  };

  const setCoachPhoto = (photoBase64: string | null) => {
    setCoachPhotoState(photoBase64);
    if (photoBase64) {
      localStorage.setItem('coach_clement_photo', photoBase64);
    } else {
      localStorage.removeItem('coach_clement_photo');
    }
  };

  return (
    <StoreContext.Provider value={{ courses, coachPhoto, addCourse, updateCourse, deleteCourse, setCoachPhoto }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}
