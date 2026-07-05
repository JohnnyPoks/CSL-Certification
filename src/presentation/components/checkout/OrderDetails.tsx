import React from 'react';

interface Course {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
}

interface OrderDetailsProps {
  courses: Course[];
}

export const OrderDetails: React.FC<OrderDetailsProps> = ({ courses }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">
        Détails de la commande ({courses.length} cours)
      </h2>
      
      <div className="space-y-4">
        {courses.map((course) => (
          <div key={course.id} className="flex items-center space-x-4">
            <img
              src={course.imageUrl}
              alt={course.title}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-grow">
              <h3 className="font-medium">{course.title}</h3>
            </div>
            <div className="font-medium">
              {course.price.toFixed(2)} €
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 