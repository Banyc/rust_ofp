var searchIndex = {};
searchIndex["rust_ofp"] = {"doc":"","items":[[0,"ofp_header","rust_ofp","",null,null],[3,"OfpHeader","rust_ofp::ofp_header","OpenFlow Header",null,null],[11,"new","","Create an `OfpHeader` out of the arguments.",0,{"inputs":[{"name":"u8"},{"name":"u8"},{"name":"u16"},{"name":"u32"}],"output":{"name":"ofpheader"}}],[11,"size","","Return the byte-size of an `OfpHeader`.",0,{"inputs":[],"output":{"name":"usize"}}],[11,"marshal","","Fills a message buffer with the header fields of an `OfpHeader`.",0,{"inputs":[{"name":"vec"},{"name":"ofpheader"}],"output":null}],[11,"parse","","Takes a message buffer (sized for an `OfpHeader`) and returns an `OfpHeader`.",0,null],[11,"version","","Return the `version` field of a header.",0,null],[11,"type_code","","Return the OpenFlow message type code of a header.\n# Safety",0,null],[11,"length","","Return the `length` field of a header. Includes the length of the header itself.",0,null],[11,"xid","","Return the `xid` field of a header, the transaction id associated with this packet.\nReplies use the same id to facilitate pairing.",0,null],[0,"openflow0x01","rust_ofp","",null,null],[3,"Mask","rust_ofp::openflow0x01","",null,null],[12,"value","","",1,null],[12,"mask","","",1,null],[3,"Pattern","","Fields to match against flows.",null,null],[12,"dl_src","","",2,null],[12,"dl_dst","","",2,null],[12,"dl_typ","","",2,null],[12,"dl_vlan","","",2,null],[12,"dl_vlan_pcp","","",2,null],[12,"nw_src","","",2,null],[12,"nw_dst","","",2,null],[12,"nw_proto","","",2,null],[12,"nw_tos","","",2,null],[12,"tp_src","","",2,null],[12,"tp_dst","","",2,null],[12,"in_port","","",2,null],[3,"Capabilities","","Capabilities supported by the datapath.",null,null],[12,"flow_stats","","",3,null],[12,"table_stats","","",3,null],[12,"port_stats","","",3,null],[12,"stp","","",3,null],[12,"ip_reasm","","",3,null],[12,"queue_stats","","",3,null],[12,"arp_match_ip","","",3,null],[3,"SupportedActions","","Actions supported by the datapath.",null,null],[12,"output","","",4,null],[12,"set_vlan_id","","",4,null],[12,"set_vlan_pcp","","",4,null],[12,"strip_vlan","","",4,null],[12,"set_dl_src","","",4,null],[12,"set_dl_dst","","",4,null],[12,"set_nw_src","","",4,null],[12,"set_nw_dst","","",4,null],[12,"set_nw_tos","","",4,null],[12,"set_tp_src","","",4,null],[12,"set_tp_dst","","",4,null],[12,"enqueue","","",4,null],[12,"vendor","","",4,null],[3,"SwitchFeatures","","Switch features.",null,null],[12,"datapath_id","","",5,null],[12,"num_buffers","","",5,null],[12,"num_tables","","",5,null],[12,"supported_capabilities","","",5,null],[12,"supported_actions","","",5,null],[12,"ports","","",5,null],[3,"FlowMod","","Represents modifications to a flow table from the controller.",null,null],[12,"command","","",6,null],[12,"pattern","","",6,null],[12,"priority","","",6,null],[12,"actions","","",6,null],[12,"cookie","","",6,null],[12,"idle_timeout","","",6,null],[12,"hard_timeout","","",6,null],[12,"notify_when_removed","","",6,null],[12,"apply_to_packet","","",6,null],[12,"out_port","","",6,null],[12,"check_overlap","","",6,null],[3,"PacketIn","","Represents packets received by the datapath and sent to the controller.",null,null],[12,"input_payload","","",7,null],[12,"total_len","","",7,null],[12,"port","","",7,null],[12,"reason","","",7,null],[3,"PacketOut","","Represents packets sent from the controller.",null,null],[12,"output_payload","","",8,null],[12,"port_id","","",8,null],[12,"apply_actions","","",8,null],[3,"FlowRemoved","","Flow removed (datapath -&gt; controller)",null,null],[12,"pattern","","",9,null],[12,"cookie","","",9,null],[12,"priority","","",9,null],[12,"reason","","",9,null],[12,"duration_sec","","",9,null],[12,"duration_nsec","","",9,null],[12,"idle_timeout","","",9,null],[12,"packet_count","","",9,null],[12,"byte_count","","",9,null],[3,"PortState","","Current state of a physical port. Not configurable by the controller.",null,null],[12,"down","","",10,null],[12,"stp_state","","",10,null],[3,"PortFeatures","","Features of physical ports available in a datapath.",null,null],[12,"f_10mbhd","","",11,null],[12,"f_10mbfd","","",11,null],[12,"f_100mbhd","","",11,null],[12,"f_100mbfd","","",11,null],[12,"f_1gbhd","","",11,null],[12,"f_1gbfd","","",11,null],[12,"f_10gbfd","","",11,null],[12,"copper","","",11,null],[12,"fiber","","",11,null],[12,"autoneg","","",11,null],[12,"pause","","",11,null],[12,"pause_asym","","",11,null],[3,"PortConfig","","Flags to indicate behavior of the physical port.",null,null],[12,"down","","",12,null],[12,"no_stp","","",12,null],[12,"no_recv","","",12,null],[12,"no_recv_stp","","",12,null],[12,"no_flood","","",12,null],[12,"no_fwd","","",12,null],[12,"no_packet_in","","",12,null],[3,"PortDesc","","Description of a physical port.",null,null],[12,"port_no","","",13,null],[12,"hw_addr","","",13,null],[12,"name","","",13,null],[12,"config","","",13,null],[12,"state","","",13,null],[12,"curr","","",13,null],[12,"advertised","","",13,null],[12,"supported","","",13,null],[12,"peer","","",13,null],[3,"PortStatus","","A physical port has changed in the datapath.",null,null],[12,"reason","","",14,null],[12,"desc","","",14,null],[4,"MsgCode","","OpenFlow 1.0 message type codes, used by headers to identify meaning of the rest of a message.",null,null],[13,"Hello","","",15,null],[13,"Error","","",15,null],[13,"EchoReq","","",15,null],[13,"EchoResp","","",15,null],[13,"Vendor","","",15,null],[13,"FeaturesReq","","",15,null],[13,"FeaturesResp","","",15,null],[13,"GetConfigReq","","",15,null],[13,"GetConfigResp","","",15,null],[13,"SetConfig","","",15,null],[13,"PacketIn","","",15,null],[13,"FlowRemoved","","",15,null],[13,"PortStatus","","",15,null],[13,"PacketOut","","",15,null],[13,"FlowMod","","",15,null],[13,"PortMod","","",15,null],[13,"StatsReq","","",15,null],[13,"StatsResp","","",15,null],[13,"BarrierReq","","",15,null],[13,"BarrierResp","","",15,null],[13,"QueueGetConfigReq","","",15,null],[13,"QueueGetConfigResp","","",15,null],[4,"PseudoPort","","Port behavior.",null,null],[13,"PhysicalPort","","",16,null],[13,"InPort","","",16,null],[13,"Table","","",16,null],[13,"Normal","","",16,null],[13,"Flood","","",16,null],[13,"AllPorts","","",16,null],[13,"Controller","","",16,null],[13,"Local","","",16,null],[4,"Action","","Actions associated with flows and packets.",null,null],[13,"Output","","",17,null],[13,"SetDlVlan","","",17,null],[13,"SetDlVlanPcp","","",17,null],[13,"SetDlSrc","","",17,null],[13,"SetDlDst","","",17,null],[13,"SetNwSrc","","",17,null],[13,"SetNwDst","","",17,null],[13,"SetNwTos","","",17,null],[13,"SetTpSrc","","",17,null],[13,"SetTpDst","","",17,null],[13,"Enqueue","","",17,null],[4,"Timeout","","How long before a flow entry expires.",null,null],[13,"Permanent","","",18,null],[13,"ExpiresAfter","","",18,null],[4,"FlowModCmd","","Type of modification to perform on a flow table.",null,null],[13,"AddFlow","","",19,null],[13,"ModFlow","","",19,null],[13,"ModStrictFlow","","",19,null],[13,"DeleteFlow","","",19,null],[13,"DeleteStrictFlow","","",19,null],[4,"Payload","","The data associated with a packet received by the controller.",null,null],[13,"Buffered","","",20,null],[13,"NotBuffered","","",20,null],[4,"PacketInReason","","The reason a packet arrives at the controller.",null,null],[13,"NoMatch","","",21,null],[13,"ExplicitSend","","",21,null],[4,"FlowRemovedReason","","Reason a flow was removed from a switch",null,null],[13,"IdleTimeout","","",22,null],[13,"HardTimeout","","",22,null],[13,"Delete","","",22,null],[4,"StpState","","STP state of a port.",null,null],[13,"Listen","","",23,null],[13,"Learn","","",23,null],[13,"Forward","","",23,null],[13,"Block","","",23,null],[4,"PortReason","","What changed about a physical port.",null,null],[13,"PortAdd","","",24,null],[13,"PortDelete","","",24,null],[13,"PortModify","","",24,null],[0,"message","","Encapsulates handling of messages implementing `MessageType` trait.",null,null],[4,"Message","rust_ofp::openflow0x01::message","Abstractions of OpenFlow messages mapping to message codes.",null,null],[13,"Hello","","",25,null],[13,"EchoRequest","","",25,null],[13,"EchoReply","","",25,null],[13,"FeaturesReq","","",25,null],[13,"FeaturesReply","","",25,null],[13,"FlowMod","","",25,null],[13,"PacketIn","","",25,null],[13,"FlowRemoved","","",25,null],[13,"PortStatus","","",25,null],[13,"PacketOut","","",25,null],[13,"BarrierRequest","","",25,null],[13,"BarrierReply","","",25,null],[5,"add_flow","","Return a `FlowMod` adding a flow parameterized by the given `priority`, `pattern`,\nand `actions`.",null,{"inputs":[{"name":"u16"},{"name":"pattern"},{"name":"vec"}],"output":{"name":"flowmod"}}],[11,"marshal","","Returns a `u8` buffer containing a marshaled OpenFlow header and the message `msg`.",25,{"inputs":[{"name":"u32"},{"name":"message"}],"output":{"name":"vec"}}],[11,"parse","","Returns a pair `(u32, Message)` of the transaction id and OpenFlow message parsed from\nthe given OpenFlow header `header`, and buffer `buf`.",25,null],[8,"MessageType","rust_ofp::openflow0x01","Common API for message types implementing OpenFlow Message Codes (see `MsgCode` enum).",null,null],[10,"size_of","","Return the byte-size of a message.",26,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[10,"parse","","Parse a buffer into a message.",26,null],[10,"marshal","","Marshal a message into a `u8` buffer.",26,{"inputs":[{"name":"self"},{"name":"vec"}],"output":null}],[11,"clone","","",15,null],[11,"fmt","","",15,null],[11,"match_all","","",2,{"inputs":[],"output":{"name":"pattern"}}],[11,"clone","","",16,null],[11,"clone","","",17,null],[11,"size_of","","",5,{"inputs":[{"name":"switchfeatures"}],"output":{"name":"usize"}}],[11,"parse","","",5,null],[11,"marshal","","",5,{"inputs":[{"name":"switchfeatures"},{"name":"vec"}],"output":null}],[11,"size_of","","",6,{"inputs":[{"name":"flowmod"}],"output":{"name":"usize"}}],[11,"parse","","",6,null],[11,"marshal","","",6,{"inputs":[{"name":"flowmod"},{"name":"vec"}],"output":null}],[11,"size_of","","",20,{"inputs":[{"name":"payload"}],"output":{"name":"usize"}}],[11,"size_of","","",7,{"inputs":[{"name":"packetin"}],"output":{"name":"usize"}}],[11,"parse","","",7,null],[11,"marshal","","",7,{"inputs":[{"name":"packetin"},{"name":"vec"}],"output":null}],[11,"size_of","","",8,{"inputs":[{"name":"packetout"}],"output":{"name":"usize"}}],[11,"parse","","",8,null],[11,"marshal","","",8,{"inputs":[{"name":"packetout"},{"name":"vec"}],"output":null}],[11,"size_of","","",9,{"inputs":[{"name":"flowremoved"}],"output":{"name":"usize"}}],[11,"parse","","",9,null],[11,"marshal","","",9,{"inputs":[{"name":"flowremoved"},{"name":"vec"}],"output":null}],[11,"size_of","","",14,{"inputs":[{"name":"portstatus"}],"output":{"name":"usize"}}],[11,"parse","","",14,null],[11,"marshal","","",14,{"inputs":[{"name":"portstatus"},{"name":"vec"}],"output":null}]],"paths":[[3,"OfpHeader"],[3,"Mask"],[3,"Pattern"],[3,"Capabilities"],[3,"SupportedActions"],[3,"SwitchFeatures"],[3,"FlowMod"],[3,"PacketIn"],[3,"PacketOut"],[3,"FlowRemoved"],[3,"PortState"],[3,"PortFeatures"],[3,"PortConfig"],[3,"PortDesc"],[3,"PortStatus"],[4,"MsgCode"],[4,"PseudoPort"],[4,"Action"],[4,"Timeout"],[4,"FlowModCmd"],[4,"Payload"],[4,"PacketInReason"],[4,"FlowRemovedReason"],[4,"StpState"],[4,"PortReason"],[4,"Message"],[8,"MessageType"]]};
searchIndex["rust_ofp_controller"] = {"doc":"","items":[],"paths":[]};
searchIndex["byteorder"] = {"doc":"This crate provides convenience methods for encoding and decoding numbers\nin either big-endian or little-endian order.","items":[[4,"BigEndian","byteorder","Defines big-endian serialization.",null,null],[4,"LittleEndian","","Defines little-endian serialization.",null,null],[6,"NetworkEndian","","Defines network byte order serialization.",null,null],[6,"NativeEndian","","Defines system native-endian serialization.",null,null],[8,"ReadBytesExt","","Extends `Read` with methods for reading numbers. (For `std::io`.)",null,null],[11,"read_u8","","Reads an unsigned 8 bit integer from the underlying reader.",0,null],[11,"read_i8","","Reads a signed 8 bit integer from the underlying reader.",0,null],[11,"read_u16","","Reads an unsigned 16 bit integer from the underlying reader.",0,null],[11,"read_i16","","Reads a signed 16 bit integer from the underlying reader.",0,null],[11,"read_u32","","Reads an unsigned 32 bit integer from the underlying reader.",0,null],[11,"read_i32","","Reads a signed 32 bit integer from the underlying reader.",0,null],[11,"read_u64","","Reads an unsigned 64 bit integer from the underlying reader.",0,null],[11,"read_i64","","Reads a signed 64 bit integer from the underlying reader.",0,null],[11,"read_uint","","Reads an unsigned n-bytes integer from the underlying reader.",0,null],[11,"read_int","","Reads a signed n-bytes integer from the underlying reader.",0,null],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number from\nthe underlying reader.",0,null],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number from\nthe underlying reader.",0,null],[8,"WriteBytesExt","","Extends `Write` with methods for writing numbers. (For `std::io`.)",null,null],[11,"write_u8","","Writes an unsigned 8 bit integer to the underlying writer.",1,null],[11,"write_i8","","Writes a signed 8 bit integer to the underlying writer.",1,null],[11,"write_u16","","Writes an unsigned 16 bit integer to the underlying writer.",1,null],[11,"write_i16","","Writes a signed 16 bit integer to the underlying writer.",1,null],[11,"write_u32","","Writes an unsigned 32 bit integer to the underlying writer.",1,null],[11,"write_i32","","Writes a signed 32 bit integer to the underlying writer.",1,null],[11,"write_u64","","Writes an unsigned 64 bit integer to the underlying writer.",1,null],[11,"write_i64","","Writes a signed 64 bit integer to the underlying writer.",1,null],[11,"write_uint","","Writes an unsigned n-bytes integer to the underlying writer.",1,null],[11,"write_int","","Writes a signed n-bytes integer to the underlying writer.",1,null],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number to\nthe underlying writer.",1,null],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number to\nthe underlying writer.",1,null],[8,"ByteOrder","","ByteOrder describes types that can serialize integers as bytes.",null,null],[10,"read_u16","","Reads an unsigned 16 bit integer from `buf`.",2,null],[10,"read_u32","","Reads an unsigned 32 bit integer from `buf`.",2,null],[10,"read_u64","","Reads an unsigned 64 bit integer from `buf`.",2,null],[10,"read_uint","","Reads an unsigned n-bytes integer from `buf`.",2,null],[10,"write_u16","","Writes an unsigned 16 bit integer `n` to `buf`.",2,null],[10,"write_u32","","Writes an unsigned 32 bit integer `n` to `buf`.",2,null],[10,"write_u64","","Writes an unsigned 64 bit integer `n` to `buf`.",2,null],[10,"write_uint","","Writes an unsigned integer `n` to `buf` using only `nbytes`.",2,null],[11,"read_i16","","Reads a signed 16 bit integer from `buf`.",2,null],[11,"read_i32","","Reads a signed 32 bit integer from `buf`.",2,null],[11,"read_i64","","Reads a signed 64 bit integer from `buf`.",2,null],[11,"read_int","","Reads a signed n-bytes integer from `buf`.",2,null],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number.",2,null],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number.",2,null],[11,"write_i16","","Writes a signed 16 bit integer `n` to `buf`.",2,null],[11,"write_i32","","Writes a signed 32 bit integer `n` to `buf`.",2,null],[11,"write_i64","","Writes a signed 64 bit integer `n` to `buf`.",2,null],[11,"write_int","","Writes a signed integer `n` to `buf` using only `nbytes`.",2,null],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number.",2,null],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number.",2,null],[11,"read_u16","","",3,null],[11,"read_u32","","",3,null],[11,"read_u64","","",3,null],[11,"read_uint","","",3,null],[11,"write_u16","","",3,null],[11,"write_u32","","",3,null],[11,"write_u64","","",3,null],[11,"write_uint","","",3,null],[11,"read_u16","","",4,null],[11,"read_u32","","",4,null],[11,"read_u64","","",4,null],[11,"read_uint","","",4,null],[11,"write_u16","","",4,null],[11,"write_u32","","",4,null],[11,"write_u64","","",4,null],[11,"write_uint","","",4,null],[11,"read_u8","","Reads an unsigned 8 bit integer from the underlying reader.",0,null],[11,"read_i8","","Reads a signed 8 bit integer from the underlying reader.",0,null],[11,"read_u16","","Reads an unsigned 16 bit integer from the underlying reader.",0,null],[11,"read_i16","","Reads a signed 16 bit integer from the underlying reader.",0,null],[11,"read_u32","","Reads an unsigned 32 bit integer from the underlying reader.",0,null],[11,"read_i32","","Reads a signed 32 bit integer from the underlying reader.",0,null],[11,"read_u64","","Reads an unsigned 64 bit integer from the underlying reader.",0,null],[11,"read_i64","","Reads a signed 64 bit integer from the underlying reader.",0,null],[11,"read_uint","","Reads an unsigned n-bytes integer from the underlying reader.",0,null],[11,"read_int","","Reads a signed n-bytes integer from the underlying reader.",0,null],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number from\nthe underlying reader.",0,null],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number from\nthe underlying reader.",0,null],[11,"write_u8","","Writes an unsigned 8 bit integer to the underlying writer.",1,null],[11,"write_i8","","Writes a signed 8 bit integer to the underlying writer.",1,null],[11,"write_u16","","Writes an unsigned 16 bit integer to the underlying writer.",1,null],[11,"write_i16","","Writes a signed 16 bit integer to the underlying writer.",1,null],[11,"write_u32","","Writes an unsigned 32 bit integer to the underlying writer.",1,null],[11,"write_i32","","Writes a signed 32 bit integer to the underlying writer.",1,null],[11,"write_u64","","Writes an unsigned 64 bit integer to the underlying writer.",1,null],[11,"write_i64","","Writes a signed 64 bit integer to the underlying writer.",1,null],[11,"write_uint","","Writes an unsigned n-bytes integer to the underlying writer.",1,null],[11,"write_int","","Writes a signed n-bytes integer to the underlying writer.",1,null],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number to\nthe underlying writer.",1,null],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number to\nthe underlying writer.",1,null]],"paths":[[8,"ReadBytesExt"],[8,"WriteBytesExt"],[8,"ByteOrder"],[4,"BigEndian"],[4,"LittleEndian"]]};
initSearch(searchIndex);