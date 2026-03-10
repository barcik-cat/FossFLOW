import applicationIcon from '../assets/icons/continuent/application.svg';
import applicationStackIcon from '../assets/icons/continuent/application_stack.svg';
import applicationWpIcon from '../assets/icons/continuent/application_wp.svg';
import connectorIcon from '../assets/icons/continuent/connector.svg';
import dashboardIcon from '../assets/icons/continuent/dashboard.svg';
import failedIcon from '../assets/icons/continuent/failed.svg';
import loadBalancerIcon from '../assets/icons/continuent/load_balancer.svg';
import managerIcon from '../assets/icons/continuent/manager.svg';
import primaryIcon from '../assets/icons/continuent/primary.svg';
import relayIcon from '../assets/icons/continuent/relay.svg';
import replicaIcon from '../assets/icons/continuent/replica.svg';
import replicatorIcon from '../assets/icons/continuent/replicator.svg';
import shunnedIcon from '../assets/icons/continuent/shunned.svg';
import witnessIcon from '../assets/icons/continuent/witness.svg';

export const continuentIconPack = [
  { id: 'continuent-primary',           name: 'Primary',           url: primaryIcon,           collection: 'continuent', isIsometric: true, scale: 0.85 },
  { id: 'continuent-replica',           name: 'Replica',           url: replicaIcon,           collection: 'continuent', isIsometric: true, scale: 0.85 },
  { id: 'continuent-relay',             name: 'Relay',             url: relayIcon,             collection: 'continuent', isIsometric: true, scale: 0.85 },
  { id: 'continuent-shunned',           name: 'Shunned',           url: shunnedIcon,           collection: 'continuent', isIsometric: true, scale: 0.85 },
  { id: 'continuent-failed',            name: 'Failed',            url: failedIcon,            collection: 'continuent', isIsometric: true, scale: 0.85 },
  { id: 'continuent-witness',           name: 'Witness',           url: witnessIcon,           collection: 'continuent', isIsometric: true, scale: 0.85 },
  { id: 'continuent-connector',         name: 'Connector',         url: connectorIcon,         collection: 'continuent', isIsometric: true, scale: 1 },
  { id: 'continuent-replicator',        name: 'Replicator',        url: replicatorIcon,        collection: 'continuent', isIsometric: true, scale: 1 },
  { id: 'continuent-manager',           name: 'Manager',           url: managerIcon,           collection: 'continuent', isIsometric: true, scale: 1 },
  { id: 'continuent-application',       name: 'Application',       url: applicationIcon,       collection: 'continuent', isIsometric: true, scale: 0.85 },
  { id: 'continuent-application-stack', name: 'Application Stack', url: applicationStackIcon,  collection: 'continuent', isIsometric: true, scale: 0.85 },
  { id: 'continuent-application-wp',    name: 'Application WP',    url: applicationWpIcon,     collection: 'continuent', isIsometric: true, scale: 0.85 },
  { id: 'continuent-dashboard',         name: 'Dashboard',         url: dashboardIcon,         collection: 'continuent', isIsometric: true, scale: 1 },
  { id: 'continuent-load-balancer',     name: 'Load Balancer',     url: loadBalancerIcon,      collection: 'continuent', isIsometric: true, scale: 0.75 },
];
