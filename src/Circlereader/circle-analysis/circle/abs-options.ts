// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class AbsOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): AbsOptions {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsAbsOptions(bb: flatbuffers.ByteBuffer, obj?: AbsOptions): AbsOptions {
    return (obj || new AbsOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsAbsOptions(bb: flatbuffers.ByteBuffer, obj?: AbsOptions): AbsOptions {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new AbsOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static startAbsOptions(builder: flatbuffers.Builder) {
    builder.startObject(0);
  }

  static endAbsOptions(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createAbsOptions(builder: flatbuffers.Builder): flatbuffers.Offset {
    AbsOptions.startAbsOptions(builder);
    return AbsOptions.endAbsOptions(builder);
  }
}
