import React from 'react';
import "./App.css";
const AppointmentsList = ({ appointments }) => {

  return (
    <div className="container mx-auto mt-8">
<h1 className="text-2xl font-bold mb-4" style={{ color: 'rgb(140 124 160)' }}>
  Today's Appointments List
</h1>


      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300">
          <thead>
          <tr>
  <th className="border bg-gray-100 px-6 py-3 text-lg font-semibold text-left">
    Patient
  </th>
  <th className="border bg-gray-100 px-6 py-3 text-lg font-semibold text-left">
    Date
  </th>
  <th className="border bg-gray-100 px-6 py-3 text-lg font-semibold text-left">
    Time
  </th>
  <th className="border bg-gray-100 px-6 py-3 text-lg font-semibold text-left">
    Doctor
  </th>
  <th className="border bg-gray-100 px-6 py-3 text-lg font-semibold text-left">
    Injury
  </th>
  <th className="border bg-gray-100 px-6 py-3 text-lg font-semibold text-left">
    Action
  </th>
</tr>

          </thead>
          <tbody>
            {appointments?.map((appointment, index) => (
              <tr key={index}>
                <td className="border px-6 py-4 flex items-center">
  <span role="img" aria-label="User" className="mr-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
  </span>
  {appointment.patient_name}
</td>

                <td className="border px-6 py-4">
                  <span role="img" aria-label="Calendar">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 inline-block mr-2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                    </svg>
                  </span> {appointment.appointment_date}
                </td>
                <td className="border px-6 py-4">
                  <span role="img" aria-label="Watch">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 inline-block mr-2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </span> {appointment.appointment_time}
                </td>
<td className="border px-6 py-4 flex items-center">
  <span role="img" aria-label="Yellow Star" className={`mr-2 ${appointment.doctor === 'Dr. Lee' || appointment.doctor === 'Dr. Patel' ? 'text-yellow-500' : 'text-green-500'}`}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
  </span>
  {appointment.doctor}
</td>
                <td className="border px-6 py-4">
                <span style={{ backgroundColor: 'rgb(168 206 242)' }} className="text-white px-2 py-1 rounded">
  {appointment.injury}
</span>

                </td>
                <td className="border px-6 py-4">
                  <span role="img" aria-label="Action">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 inline-block mr-2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentsList;
