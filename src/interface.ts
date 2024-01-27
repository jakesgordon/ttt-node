//=================================================================================================
// ENUMS
//=================================================================================================

export enum Piece {
  Dot   = "dot",
  Cross = "cross",
}

export enum Position {
  TopLeft     = "top-left",
  Top         = "top",
  TopRight    = "top-right",
  Left        = "left",
  Center      = "center",
  Right       = "right",
  BottomLeft  = "bottom-left",
  Bottom      = "bottom",
  BottomRight = "bottom-right",
}

//=================================================================================================
// COMMANDS
//=================================================================================================

export enum Command {
  Ping = "Ping",
}

interface PingCommand {
  type: Command.Ping;
}

export type AnyCommand =
  | PingCommand

//=================================================================================================
// EVENTS
//=================================================================================================

export enum Event {
  Pong = "Pong",
}

export interface PongEvent {
  type: Event.Pong;
}

export type AnyEvent =
  | PongEvent

//-------------------------------------------------------------------------------------------------
