import React from 'react';

function Todo({item}) {
    return (
        <>
             <div className="flex mb-4 items-center">
                  <p className="mr-auto text-gray-700">{item.text}</p>
                  <button className="p-1 px-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-600 border-green-600 hover:bg-green-600">Done</button>
                  <button className="p-1 px-2 ml-2 border-2 rounded text-red-600 border-red-600 hover:text-white hover:bg-red-600">Remove</button>
              </div>
        </>
    );
}

export default Todo;