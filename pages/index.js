import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';

export default function DataValidation() {
  const [accounts, setAccounts] = useState([]);
  const [groupedInstitutions, setGroupedInstitutions] = useState([]);
  const [institutions, setInstitutions] = useState();
  
  const excludeInstitutions = ["AU00000", "AU00001", "AU01201", "AU00302", "AU12301", "AU15701", "AU15001", "AU14601", "AU15601", "AU16101", "AU14701", "AU14801", "AU15101", "AU16301", "AU16401", "AU16201", "AU14901", "AU08901", "AU17001", "AU14501", "AU19401", "AU02201", "AU06701", "AU09301", "AU13601"]

  useEffect(() => {
    axios
      .get('/api/institutions')
      .then(res => {
        setInstitutions(res.data)
      })
  }, [])

  useEffect(() => {
    axios
      .get('/api/users')
      .then(res => {
        res.data.forEach(user => {
          let userId = user.id;
          axios
          .get('/api/accounts', { params: { userId } })
          .then(res => {
            let nonTests = res.data.filter(account => !excludeInstitutions.some(excluded => account.institution === excluded))
            setAccounts(accounts => accounts.concat(nonTests));
          })
          .catch(error => {
            console.log(error)
          });
        });
      })
      .catch(error => {
        console.log(error)
      });
  }, []);

  useEffect(() => {
    let groupedInstitutionsById = groupBy(accounts, function(item)
    {
      return [item.institution];
    });
    setGroupedInstitutions(groupedInstitutionsById)
  }, [accounts])

  return (
    <>
      <main className="text-black bg-white">
      <h1>Data points returned by institutions</h1>
        {groupedInstitutions.map((accounts, i) => {
          let institutionId = accounts[0].institution;

          let properties = ['accountHolder', 'accountNo', 'name', 'currency', 'class', 'balance', 'availableFunds', 'lastUpdated', 'transactionIntervals', 'institution'];

          return (
            <div className="table" key={i}>
              <h2>{institutions.filter(institution => institution.id === institutionId)[0].name}</h2>
              <TableContainer  component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="right" sx={{ color: "whitesmoke" }} >Property</TableCell>
                      <TableCell align="right" sx={{ color: "whitesmoke" }} >Times it was populated</TableCell>
                      <TableCell align="right" sx={{ color: "whitesmoke" }} >out of</TableCell>
                      <TableCell align="right" sx={{ color: "whitesmoke" }} >Reliability</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {properties.map((key) => {
                      return percentageReturned(accounts, key)
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          )
        })}
      </main>
    </>
  );
}

function groupBy( array , f )
{
  var groups = {};
  array.forEach( function( o )
  {
    var group = JSON.stringify( f(o) );
    groups[group] = groups[group] || [];
    groups[group].push( o );  
  });
  return Object.keys(groups).map( function( group )
  {
    return groups[group]; 
  })
}


const percentageReturned = (accounts, key) => {
  const blank = "";
  let totalLength = accounts.length;
  const count = accounts.filter((account) => account[key] === blank || account[key] === null).length;
  
  let totalPopulated = totalLength - count;
  let percentageReturned = totalPopulated/totalLength * 100;

  return (
      <TableRow key={key}>
        <TableCell align="right">{key}</TableCell>
        <TableCell align="right">{totalPopulated}</TableCell>
        <TableCell align="right">{totalLength}</TableCell>
        <TableCell align="right">{Math.round(percentageReturned)}%</TableCell>
      </TableRow>
  )
}