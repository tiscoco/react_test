
import { useState } from 'react';

export default function App() {

  let indexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [visible, setVisible] = useState(false)

  const [mahasiswa, setMahasiswa] = useState({
    aspek_penilaian_1: {
      mahasiswa_1: 0,
      mahasiswa_2: 0,
      mahasiswa_3: 0,
      mahasiswa_4: 0,
      mahasiswa_5: 0,
      mahasiswa_6: 0,
      mahasiswa_7: 0,
      mahasiswa_8: 0,
      mahasiswa_9: 0,
      mahasiswa_10: 0,
    },
    aspek_penilaian_2: {
      mahasiswa_1: 0,
      mahasiswa_2: 0,
      mahasiswa_3: 0,
      mahasiswa_4: 0,
      mahasiswa_5: 0,
      mahasiswa_6: 0,
      mahasiswa_7: 0,
      mahasiswa_8: 0,
      mahasiswa_9: 0,
      mahasiswa_10: 0,
    },
    aspek_penilaian_3: {
      mahasiswa_1: 0,
      mahasiswa_2: 0,
      mahasiswa_3: 0,
      mahasiswa_4: 0,
      mahasiswa_5: 0,
      mahasiswa_6: 0,
      mahasiswa_7: 0,
      mahasiswa_8: 0,
      mahasiswa_9: 0,
      mahasiswa_10: 0,
    },
    aspek_penilaian_4: {
      mahasiswa_1: 0,
      mahasiswa_2: 0,
      mahasiswa_3: 0,
      mahasiswa_4: 0,
      mahasiswa_5: 0,
      mahasiswa_6: 0,
      mahasiswa_7: 0,
      mahasiswa_8: 0,
      mahasiswa_9: 0,
      mahasiswa_10: 0,
    }
  })

  const simpan = () => {
    setVisible(true)

  }

  const handleInputChange = (value, aspek, nama_mahasiswa) => {
    // console.log(value, aspek, nama_mahasiswa)
    let copyGrade = mahasiswa
    copyGrade[aspek][nama_mahasiswa] = parseInt(value)
    setMahasiswa(copyGrade)
  }

  return (

    <div className="App">
      <h1>Aplikasi Aspek Penilaian</h1>
      <table style={{ borderCollapse: 'collapse', width: 'calc(100vw - 16px)' }}>
        <tr>
          <th> </th>
          <th style={{ padding: '20px' }}>Aspek Penilaian 1</th>
          <th style={{ padding: '20px' }}>Aspek Penilaian 2</th>
          <th style={{ padding: '20px' }}>Aspek Penilaian 3</th>
          <th style={{ padding: '20px' }}>Aspek Penilaian 4</th>
        </tr>

        {indexes.map(mhs => (
          <tr style={{ border: '1px solid black' }}>
            <td style={{ padding: '10px' }} >Mahasiswa {mhs}</td>
            <td style={{ padding: '10px' }} >
              <input type="number" min={1} max={10} style={{ width: '100%' }} onChange={(event) => handleInputChange(event.target.value, "aspek_penilaian_1", `mahasiswa_${mhs}`)} />
            </td>
            <td style={{ padding: '10px' }}  >
              <input type="number" min={1} max={10} style={{ width: '100%' }} onChange={() => handleInputChange(event.target.value, "aspek_penilaian_2", `mahasiswa_${mhs}`)} />
            </td>
            <td style={{ padding: '10px' }} >
              <input type="number" min={1} max={10} style={{ width: '100%' }} onChange={() => handleInputChange(event.target.value, "aspek_penilaian_3", `mahasiswa_${mhs}`)} />
            </td>
            <td style={{ padding: '10px' }} >
              <input type="number" min={1} max={10} style={{ width: '100%' }} onChange={() => handleInputChange(event.target.value, "aspek_penilaian_4", `mahasiswa_${mhs}`)} />
            </td>
          </tr>
        ))}
      </table>
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <button type='button' style={{ marginTop: '10px', background: 'black', color: 'white', padding: '10px' }} onClick={simpan}>Simpan</button>
      </div>
      <span style={{ wordWrap: 'break-word' }}>{visible ? JSON.stringify(mahasiswa) : ''}</span>
    </div>

  );
}
