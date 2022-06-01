import { Fragment, useEffect, useState } from 'react';

import { Divider, List, ListItem, ListItemText, Typography } from '@mui/material';

import { useAuth } from '../../context/Auth';
import { getForuns } from '../../services/foruns';

export const Foruns = () => {
  const [foruns, setForuns] = useState([]);

  const { userInfo } = useAuth();

  const fetchForuns = async () => {
    const listaForuns = await getForuns();
    setForuns(listaForuns);
  };

  useEffect(() => {
    fetchForuns();
  }, []);

  return (
    <List sx={{ marginTop: '15%', width: '100%', bgcolor: 'primary.light' }}>
      {foruns.map((item) => (
        <Fragment key={item.id}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={item.titulo}
              secondary={
                <>
                  <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                    {userInfo?.nome === item.usuario ? 'Meu fórum' : item.usuario}
                  </Typography>

                  {` - ${item.descricao}`}
                </>
              }
            />
          </ListItem>

          <Divider />
        </Fragment>
      ))}
    </List>
  );
};
