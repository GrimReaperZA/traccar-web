import React, { useState } from 'react';
import dayjs from 'dayjs';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormControlLabel,
  Checkbox,
  TextField,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditItemView from './components/EditItemView';
import { useTranslation } from '../common/components/LocalizationProvider';
import SettingsMenu from './components/SettingsMenu';
import useQuery from '../common/util/useQuery';
import useSettingsStyles from './common/useSettingsStyles';

const DevicePage = () => {
  const classes = useSettingsStyles();
  const t = useTranslation();

  const query = useQuery();
  const deviceId = query.get('deviceId');
  const [item, setItem] = useState(deviceId ? { deviceId } : null);
  const validate = () => item && item.name && item.deviceId;

  return (
    <EditItemView endpoint="devices" item={item} setItem={setItem} validate={validate} menu={<SettingsMenu />} breadcrumbs={['settingsTitle', 'sharedDevice']}>
      {item && (
        <>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">{t('sharedRequired')}</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              <TextField value={item.name || ''} onChange={(event) => setItem({ ...item, name: event.target.value })} label={t('sharedName')} />
              <TextField value={item.deviceId || ''} onChange={(event) => setItem({ ...item, deviceId: event.target.value })} label={t('deviceIdentifier')} helperText={t('deviceIdentifierHelp')} disabled={Boolean(deviceId)} />
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">
                {t('sharedExtra')}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              <TextField value={item.contact || ''} onChange={(event) => setItem({ ...item, contact: event.target.value })} label={t('deviceContact')} />
              <FormControlLabel control={<Checkbox checked={item.disabled} onChange={(event) => setItem({ ...item, disabled: event.target.checked })} />} label={t('sharedDisabled')} />
            </AccordionDetails>
          </Accordion>
        </>
      )}
    </EditItemView>
  );
};

export default DevicePage;
