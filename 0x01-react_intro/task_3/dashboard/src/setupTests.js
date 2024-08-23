// src/setupTests.js
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Configure Enzyme with the appropriate adapter
Enzyme.configure({ adapter: new Adapter() });

// Optionally, you can add a serializer for snapshots
import { createSerializer } from 'enzyme-to-json';
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

