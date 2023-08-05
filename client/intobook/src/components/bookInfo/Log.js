import React, { useState } from 'react';
import { Card, CardContent, Menu, MenuItem } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from 'styled-components';

const Log = ({ log }) => {
  const startTime = log?.startTime;
  // const endTime = log?.endTime;
  const endTime = '2023-08-05T23:59:37.004'
  // 이후에는 로그당 독서 시간 받아오기
  const pageAmount = log?.pageAmount + 30;
  
  const st = new Date(startTime);
  const formatStartTime = `${st.getFullYear()}.${(st.getMonth() + 1).toString().padStart(2, '0')}.${st.getDate().toString().padStart(2, '0')} ${st.getHours()}:${st.getMinutes()}`;
  
  const et = new Date(endTime);
  const formatEndTime = `${et.getHours().toString()}:${et.getMinutes().toString().padStart(2, '0')}`;
  
  // 수정하기/삭제하기 menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const openMenuHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const closeMenuHandler = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <LogCard sx={{ borderRadius: '10px', boxShadow: 'none' }}>  
        <CardContent>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <span>{formatStartTime} ~ {formatEndTime}</span>
            <span>{pageAmount}m</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>한줄평을 작성해보세요</div>
            <EditIcon sx={{ fontSize: 'medium' }} id='edit-button' 
              onClick={openMenuHandler} 
              aria-controls={open ? 'edit-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            />
            <Menu id='edit-menu' anchorEl={anchorEl} open={open}
              onClose={closeMenuHandler} 
              MenuListProps={{
                'aria-labelledby': 'edit-button',
                sx: { padding: 0 }
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
            >
              <MenuItem onClick={closeMenuHandler} sx={{ fontSize: '12px' }}>수정하기</MenuItem>
              <MenuItem onClick={closeMenuHandler} sx={{ fontSize: '12px' }}>삭제하기</MenuItem>
            </Menu>
          </div>
        </CardContent>
      </LogCard>
    </div>
  );
};

const LogCard = styled(Card)`
  width: 296px;
  height: 90px;
  border: 1px solid var(--main-color);
  font-size: 14px;
`;

export default Log; 