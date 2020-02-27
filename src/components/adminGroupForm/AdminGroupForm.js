import React from 'react';
import { GroupNameForm } from './groupNameForm/GroupNameForm';
import { AddDevForm } from './addDev/AddDev';
import { GroupPreview } from './groupPreview/GroupPreview';
import { useSelector } from 'react-redux';
import { toGetPreviewDevs, toGetUserSession, toGetPreviewGroupName, toGetPreviewGroupDescription } from '../../selectors/useSelectors';

export const AdminGroupForm = () => {
  const devsInGroupArray = useSelector(toGetPreviewDevs);
  const groupName = useSelector(toGetPreviewGroupName);
  const groupDescription = useSelector(toGetPreviewGroupDescription);
  const admin = useSelector(toGetUserSession);

  const groupToPost = { 
    groupName: groupName,
    groupDescription: groupDescription, 
    devsInGroup: devsInGroupArray, 
    adminIds: [admin._id]
  };


  const postGroup = () => {
    console.log(groupToPost, 'this is the group to post');
    ///dispact action to POST a new group ////
  };


  return (
    <>
      <GroupNameForm />
      <AddDevForm />
      <GroupPreview />
      
      <button onClick={postGroup}>Create Group</button>
    </>
  );
};

