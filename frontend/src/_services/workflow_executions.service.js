import config from 'config';
import { authHeader, handleResponse } from '@/_helpers';
import { authenticationService } from '@/_services';

export const workflowExecutionsService = {
  create,
  getStatus,
};

function create(appVersionId) {
  const currentUser = authenticationService.currentUserValue;
  const body = { appVersionId, userId: currentUser.id };
  const requestOptions = { method: 'POST', headers: authHeader(), body: JSON.stringify(body) };
  return fetch(`${config.apiUrl}/workflow_executions`, requestOptions).then(handleResponse);
}

function getStatus(workflowExecutionId) {
  const requestOptions = { method: 'GET', headers: authHeader() };
  return fetch(`${config.apiUrl}/workflow_executions/${workflowExecutionId}`, requestOptions).then(handleResponse);
}
