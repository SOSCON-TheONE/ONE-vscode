// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class LogicalOrOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): LogicalOrOptions {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsLogicalOrOptions(bb: flatbuffers.ByteBuffer, obj?: LogicalOrOptions):
      LogicalOrOptions {
    return (obj || new LogicalOrOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsLogicalOrOptions(bb: flatbuffers.ByteBuffer, obj?: LogicalOrOptions):
      LogicalOrOptions {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new LogicalOrOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static startLogicalOrOptions(builder: flatbuffers.Builder) {
    builder.startObject(0);
  }

  static endLogicalOrOptions(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createLogicalOrOptions(builder: flatbuffers.Builder): flatbuffers.Offset {
    LogicalOrOptions.startLogicalOrOptions(builder);
    return LogicalOrOptions.endLogicalOrOptions(builder);
  }
}